'use server';

import { generateWellnessTip, WellnessTipInput } from '@/ai/flows/wellness-tip-generator';
import { z } from 'zod';

const TipSchema = z.object({
  topic: z.string().min(3, { message: 'Topic must be at least 3 characters long.' }),
});

export type State = {
  message?: string | null;
  tip?: string | null;
  errors?: {
    topic?: string[];
  };
};

export async function getWellnessTip(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = TipSchema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please check your input.',
    };
  }

  try {
    const input: WellnessTipInput = { topic: validatedFields.data.topic };
    const result = await generateWellnessTip(input);
    if (result.tip) {
      return { tip: result.tip, message: null, errors: {} };
    } else {
      return { message: "Sorry, I couldn't generate a tip for that topic.", tip: null, errors: {} };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Please try again.', tip: null, errors: {} };
  }
}
