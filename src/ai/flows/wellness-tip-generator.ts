'use server';

/**
 * @fileOverview An AI agent that provides wellness tips and recipes related to Tamil tradition and current health trends.
 *
 * - generateWellnessTip - A function that generates a wellness tip.
 * - WellnessTipInput - The input type for the generateWellnessTip function.
 * - WellnessTipOutput - The return type for the generateWellnessTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WellnessTipInputSchema = z.object({
  topic: z
    .string()
    .describe('The specific wellness topic to generate a tip for.'),
});
export type WellnessTipInput = z.infer<typeof WellnessTipInputSchema>;

const WellnessTipOutputSchema = z.object({
  tip: z.string().describe('A wellness tip or recipe related to Tamil tradition and current health trends.'),
});
export type WellnessTipOutput = z.infer<typeof WellnessTipOutputSchema>;

export async function generateWellnessTip(input: WellnessTipInput): Promise<WellnessTipOutput> {
  return wellnessTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'wellnessTipPrompt',
  input: {schema: WellnessTipInputSchema},
  output: {schema: WellnessTipOutputSchema},
  prompt: `You are a wellness expert specializing in Tamil traditions and current health trends.

You will generate a wellness tip or recipe based on the user's specified topic, blending ancient wisdom with modern nutritional science. The tip should be practical and easy to implement in daily life.

Topic: {{{topic}}}
`,
});

const wellnessTipFlow = ai.defineFlow(
  {
    name: 'wellnessTipFlow',
    inputSchema: WellnessTipInputSchema,
    outputSchema: WellnessTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
