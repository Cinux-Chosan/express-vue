import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import Markdown from 'npm:markdown';

const { markdown } = Markdown;

export function renderType([post = {}] /*, hash*/ ) {
  let content = get(post, 'content');
  switch (get(post, 'type')) {
    case 'md':
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
