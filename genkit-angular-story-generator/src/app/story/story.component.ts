/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Component, inject, resource, computed, linkedSignal } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoryService } from '../story.service';
import { runFlow } from 'genkit/beta/client';
import { ImageComponent } from '../image/image.component';
import { UserInputComponent } from '../user-input/user-input.component';

const BEGIN_FLOW = 'beginStoryFlow';
const CONTINUE_FLOW = 'continueStoryFlow';
const DEFAULT_STORY: StoryData = {
  primaryObjective: '',
  storyParts: [],
  options: [],
  rating: '',
  progress: 0
};

@Component({
  selector: 'app-story',
  imports: [PercentPipe, ImageComponent, UserInputComponent, MatProgressSpinnerModule, MatProgressBarModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {}

interface StoryData {
  primaryObjective: string;
  storyParts: string[];
  options: string[];
  rating: string;
  progress: number;
}
