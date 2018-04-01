import { helper } from '@ember/component/helper';
import Markdown from 'npm:markdown';

const { markdown } = Markdown;

export function renderType([content = '', type] /*, hash*/ ) {
  switch (type) {
    case 'md':
    case 'markdown':
      content = markdown.toHTML(content);
      break;
    case 'html':
      break;
    default:
      break;
  }
  return content;
}

export default helper(renderType);
