"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getWellnessTip, State } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? 'Generating...' : <> <Sparkles className="mr-2 h-4 w-4" /> Get Wellness Tip </>}
    </Button>
  );
}

export function WellnessAI() {
  const initialState: State = { message: null, errors: {}, tip: null };
  const [state, dispatch] = useActionState(getWellnessTip, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
    if (state.tip) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="wellness-ai" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Your Personal Wellness AI</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Curious about a specific health topic? Get a wellness tip rooted in Tamil tradition and modern science.</p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-lg border-primary/10">
          <CardHeader>
            <CardTitle className="text-primary">Wellness Tip Generator</CardTitle>
            <CardDescription>Enter a topic like "digestion", "better sleep", or "energy boost".</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={dispatch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic" className="text-primary">Your Topic</Label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input id="topic" name="topic" placeholder="e.g., Healthy Digestion" className="flex-grow" aria-label="Wellness topic" />
                  <SubmitButton />
                </div>
                {state.errors?.topic && <p className="text-sm font-medium text-destructive">{state.errors.topic}</p>}
              </div>
            </form>
            {state.tip && (
              <div className="mt-6 p-4 bg-secondary rounded-lg border border-primary/10 animate-in fade-in-50 duration-500">
                <h4 className="font-bold text-lg text-primary mb-2 flex items-center"><Sparkles className="mr-2 h-5 w-5 text-accent"/>Your Wellness Tip:</h4>
                <p className="text-foreground whitespace-pre-wrap">{state.tip}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
