import { ComponentType, MouseEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { MentionData } from '../../';
import { MentionPluginTheme } from '../../theme';
export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: boolean | 'false' | 'true';
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
  selectMention(mention: MentionData | null): void;
}
interface EntryProps {
  mention: MentionData;
  entryComponent: ComponentType<EntryComponentProps>;
  onMentionSelect(mention: MentionData | null): void;
  theme: MentionPluginTheme;
  id: string;
  index: number;
  onMentionFocus(index: number): void;
  isFocused: boolean;
  searchValue?: string;
}
declare const Entry: {
  ({
    onMentionSelect,
    mention,
    theme,
    index,
    onMentionFocus,
    isFocused,
    id,
    searchValue,
    entryComponent: EntryComponent,
  }: EntryProps): ReactElement;
  propTypes: {
    entryComponent: PropTypes.Validator<any>;
    searchValue: PropTypes.Requireable<string>;
    onMentionSelect: PropTypes.Requireable<(...args: any[]) => any>;
  };
};
export default Entry;
