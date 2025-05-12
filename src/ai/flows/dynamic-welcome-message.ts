// use server'
'use server';

/**
 * @fileOverview A flow to generate a dynamic welcome message for K R Bharath's portfolio website.
 *
 * - generateDynamicWelcomeMessage - A function that generates a personalized welcome message.
 * - DynamicWelcomeMessageInput - The input type for the generateDynamicWelcomeMessage function.
 * - DynamicWelcomeMessageOutput - The return type for the generateDynamicWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicWelcomeMessageInputSchema = z.object({
  recentAccomplishments: z
    .string()
    .describe("K R Bharath's recent accomplishments."),
  yearsOfExperience: z
    .number()
    .describe('The number of years of experience K R Bharath has.'),
  currentTechTrends: z
    .string()
    .describe('Current technology trends in data science and automation.'),
});
export type DynamicWelcomeMessageInput = z.infer<typeof DynamicWelcomeMessageInputSchema>;

const DynamicWelcomeMessageOutputSchema = z.object({
  welcomeMessage: z.string().describe('The personalized welcome message.'),
});
export type DynamicWelcomeMessageOutput = z.infer<typeof DynamicWelcomeMessageOutputSchema>;

export async function generateDynamicWelcomeMessage(
  input: DynamicWelcomeMessageInput
): Promise<DynamicWelcomeMessageOutput> {
  return dynamicWelcomeMessageFlow(input);
}

const dynamicWelcomeMessagePrompt = ai.definePrompt({
  name: 'dynamicWelcomeMessagePrompt',
  input: {schema: DynamicWelcomeMessageInputSchema},
  output: {schema: DynamicWelcomeMessageOutputSchema},
  prompt: `You are crafting a personalized welcome message for K R Bharath's portfolio website. K R Bharath is a data scientist and automation expert.

  Here's some information to help you:

  Recent Accomplishments: {{{recentAccomplishments}}}
  Years of Experience: {{{yearsOfExperience}}}
  Current Tech Trends: {{{currentTechTrends}}}

  Based on this information, create a concise and engaging welcome message that highlights K R Bharath's expertise and current focus. Tailor the message to emphasize either his recent achievements or his overall experience, depending on what is most relevant and impactful given the current tech trends.

  The welcome message should be no more than two sentences.
`,
});

const dynamicWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'dynamicWelcomeMessageFlow',
    inputSchema: DynamicWelcomeMessageInputSchema,
    outputSchema: DynamicWelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await dynamicWelcomeMessagePrompt(input);
    return output!;
  }
);
