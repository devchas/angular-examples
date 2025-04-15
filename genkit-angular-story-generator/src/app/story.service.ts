/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Injectable, signal, linkedSignal, resource } from '@angular/core';
import { runFlow } from 'genkit/beta/client';

export const DESCRIPTION_FLOW = 'descriptionFlow';
const DEFAULT_PREMISE: StoryPremise = {
  storyPremise: 'Make up a story',
  nextQuestion: '',
  premiseOptions: []
};

@Injectable({
  providedIn: 'root'
})
export class StoryService {}

interface StoryPremise {
  storyPremise: string;
  nextQuestion: string;
  premiseOptions: string[];
}

function randomId(): string {
  return Date.now() + '' + Math.floor(Math.random() * 1000000000);
}
