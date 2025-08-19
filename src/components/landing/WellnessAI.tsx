"use client";

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { getWellnessTip, State } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
      {pending ? 'Generating...' : <> <Sparkles className="mr-2 h-4 w-4" /> Get Wellness Tip </>}
    </Button>
  );
}

const suggestionTopics = ["Digestion", "Better Sleep", "Energy Boost", "Stress Relief"];

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

  const handleSuggestionClick = (topic: string) => {
    if (formRef.current) {
        const topicInput = formRef.current.elements.namedItem('topic') as HTMLInputElement;
        if (topicInput) {
            topicInput.value = topic;
            formRef.current.requestSubmit();
        }
    }
  };

  return (
    <section id="wellness-ai" className="bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-[3%]"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <div className="inline-block bg-accent/10 text-accent p-3 rounded-full mb-4">
                        <BrainCircuit className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Your Personal Wellness AI</h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        Curious about a specific health topic? Get a wellness tip rooted in Tamil tradition and modern science, powered by AI.
                    </p>
                </div>
                
                <Card className="shadow-2xl border-primary/10 bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <form ref={formRef} action={dispatch} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="topic" className="font-semibold text-primary">
                                    Ask about a wellness topic...
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4">
                                <Input id="topic" name="topic" placeholder="e.g., Healthy Digestion" className="flex-grow bg-background" aria-label="Wellness topic" />
                                <SubmitButton />
                                </div>
                                {state.errors?.topic && <p className="text-sm font-medium text-destructive">{state.errors.topic}</p>}
                            </div>
                        </form>

                        <div className="mt-4">
                            <p className="text-sm text-muted-foreground mb-2">Or try one of these:</p>
                            <div className="flex flex-wrap gap-2">
                                {suggestionTopics.map(topic => (
                                <Button 
                                    key={topic} 
                                    variant="outline" 
                                    size="sm" 
                                    className="border-accent text-accent hover:bg-accent/10"
                                    onClick={() => handleSuggestionClick(topic)}
                                >
                                    {topic}
                                </Button>
                                ))}
                            </div>
                        </div>

                        {state.tip && (
                        <div className="mt-6 p-4 bg-primary/95 text-primary-foreground rounded-lg border border-accent/20 animate-in fade-in-50 duration-500 shadow-inner">
                            <h4 className="font-bold text-lg text-accent mb-2 flex items-center">
                                <Sparkles className="mr-2 h-5 w-5"/>
                                Your AI-Generated Wellness Tip
                            </h4>
                            <p className="whitespace-pre-wrap text-primary-foreground/90">{state.tip}</p>
                        </div>
                        )}
                    </CardContent>
                </Card>
            </div>
      </div>
    </section>
  );
}
