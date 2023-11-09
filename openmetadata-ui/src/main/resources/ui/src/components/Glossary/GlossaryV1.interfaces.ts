/*
 *  Copyright 2023 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { LoadingState } from 'Models';
import { EntityDetailsObjectInterface } from '../../components/Explore/explore.interface';
import { VotingDataProps } from '../../components/Voting/voting.interface';
import { Glossary } from '../../generated/entity/data/glossary';
import { GlossaryTerm } from '../../generated/entity/data/glossaryTerm';

export type GlossaryV1Props = {
  deleteStatus: LoadingState;
  handleSelectedKey?: (key: string) => void;
  selectedData: Glossary | GlossaryTerm;
  isGlossaryActive: boolean;
  updateGlossary: (value: Glossary) => Promise<void>;
  onGlossaryTermUpdate: (value: GlossaryTerm) => Promise<void>;
  onGlossaryDelete: (id: string) => void;
  onGlossaryTermDelete: (id: string) => void;
  isVersionsView: boolean;
  onAssetClick?: (asset?: EntityDetailsObjectInterface) => void;
  isSummaryPanelOpen: boolean;
  updateVote?: (data: VotingDataProps) => Promise<void>;
  refreshActiveGlossaryTerm?: () => void;
};
