/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoryService, DESCRIPTION_FLOW } from '../story.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const RATING_TEXT: { [key: string]: string} = {
  'good': 'Great choice! One step closer to acheiving your primary objective!',
  'neutral': 'Not a good choice, but not a bad one either. Try again!',
  'bad': 'That wasn\'t a good decision. That may set you back a bit.'
};

@Component({
  selector: 'app-user-input',
  imports: [FormsModule, MatProgressSpinnerModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {}
