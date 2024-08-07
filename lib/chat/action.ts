/* now with this server-only package any client component imports form this, will reveive a build-time error explaning that this module can only be used on the server */
import 'server-only';

import { nanoid } from "../utils"
import { Chat } from "../types";
import { getSession } from "@/auth"
import {
	createAI,
	createStreamableUI,
	getMutableAIState,
	getAIState,
	streamUI,
	createStreamableValue
} from 'ai/rsc';

import { openai } from "@ai-sdk/openai";

export const AI = createAI({
	actions: {

	},
	initialUIState: [],
	initialAIState: { chatId: nanoid(), messages: [] },
	onGetUIState: async () => {
		'use server';
		const session = await getSession();

		if (session) {
			const aiState = getAIState() as Chat;

			if (aiState) {
				const uiState = getUIStateFromAIState();
				return uiState;
			}
		} else {
			return;
		}
	},
	onSetAiState: async ({ state }) => {
		"use server"

		const session = await getSession();

		if (session) {
			const { chatId, message } = state;

			const createdAt = new Date();

			const userId = session
		}
	}
});

export const getUIStateFromAIState = () => {

}
