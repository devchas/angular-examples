/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Component, inject, resource, computed, input, ResourceStatus } from '@angular/core';
import { StoryService } from '../story.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { runFlow } from 'genkit/beta/client';

const IMG_FLOW = 'genImgFlow';
const LOADING_STATUSES = [ResourceStatus.Loading, ResourceStatus.Reloading];

@Component({
  selector: 'app-image',
  imports: [MatProgressSpinnerModule, MatIconModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {}
