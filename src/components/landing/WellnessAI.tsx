
"use client";

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { getWellnessTip, State } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, BrainCircuit } from 'lucide-react';
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
            
            <Card className="shadow-2xl border-primary/10 bg-white/50 backdrop-blur-sm p-2">
                <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-4">Wellness Tip Generator</h3>
                        <p className="text-muted-foreground mb-6">Enter a topic like "digestion," "better sleep," or "energy boost" to receive a personalized tip.</p>
                        
                        <form ref={formRef} action={dispatch} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="topic" className="font-semibold text-primary">
                                    Your Topic
                                </label>
                                <Input id="topic" name="topic" placeholder="e.g., Healthy Digestion" className="flex-grow bg-background" aria-label="Wellness topic" />
                                {state.errors?.topic && <p className="text-sm font-medium text-destructive">{state.errors.topic}</p>}
                            </div>
                            <SubmitButton />
                        </form>

                        <div className="mt-6">
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
                    </div>
                    
                    <div className="bg-primary/95 text-primary-foreground rounded-lg m-2 lg:m-0 lg:rounded-l-none">
                         <div className={cn("p-6 flex flex-col items-center justify-center h-full transition-opacity duration-500", state.tip ? 'opacity-100' : 'opacity-50')}>
                            {state.tip ? (
                                <div className="w-full animate-in fade-in-50">
                                    <h4 className="font-bold text-lg text-accent mb-2 flex items-center">
                                        <Sparkles className="mr-2 h-5 w-5"/>
                                        Your AI-Generated Wellness Tip
                                    </h4>
                                    <p className="whitespace-pre-wrap text-primary-foreground/90">{state.tip}</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <Sparkles className="mx-auto h-12 w-12 text-accent/50 mb-4"/>
                                    <p className="text-primary-foreground/70">Your personalized tip will appear here...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </section>
  );
}
