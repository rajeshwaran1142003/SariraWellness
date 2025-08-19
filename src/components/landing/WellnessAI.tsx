
"use client";

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { getWellnessTip, State } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, BrainCircuit, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
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
            <div className="text-center mb-12">
                <div className="inline-block bg-accent/10 text-accent p-3 rounded-full mb-4">
                    <BrainCircuit className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Your Personal Wellness AI</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Curious about a specific health topic? Get a wellness tip rooted in Tamil tradition and modern science, powered by AI.
                </p>
            </div>
            
            <Card className="shadow-2xl border-primary/10 bg-white/50 backdrop-blur-sm max-w-3xl mx-auto">
                <CardContent className="p-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-xl font-bold text-primary mb-2 text-center">Wellness Tip Generator</h3>
                        <p className="text-muted-foreground mb-6 text-center">Enter a topic like "digestion" or "better sleep" to receive a personalized tip.</p>
                        
                        <form ref={formRef} action={dispatch} className="space-y-4 mb-6">
                            <div className="space-y-2">
                                <label htmlFor="topic" className="font-semibold text-primary sr-only">
                                    Your Topic
                                </label>
                                <Input id="topic" name="topic" placeholder="e.g., Healthy Digestion" className="flex-grow bg-background text-center" aria-label="Wellness topic" />
                                {state.errors?.topic && <p className="text-sm font-medium text-destructive text-center">{state.errors.topic}</p>}
                            </div>
                            <SubmitButton />
                        </form>

                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-2">Or try one of these:</p>
                            <div className="flex flex-wrap gap-2 justify-center">
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
                             <div className="mt-8 pt-6 border-t border-primary/10">
                                <div className={cn("p-6 flex flex-col items-center justify-center h-full transition-opacity duration-500 bg-primary/5 rounded-lg", state.tip ? 'opacity-100' : 'opacity-0')}>
                                    <div className="w-full animate-in fade-in-50 text-center">
                                        <h4 className="font-bold text-lg text-accent mb-2 flex items-center justify-center">
                                            <Sparkles className="mr-2 h-5 w-5"/>
                                            Your AI-Generated Wellness Tip
                                        </h4>
                                        <p className="whitespace-pre-wrap text-primary/90">{state.tip}</p>
                                    </div>
                                </div>
                             </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
