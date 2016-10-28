export function createItem(ticket) {
  return {
    id: ticket.id || `id-${Date.now()}`,
    key: ticket.key || '',
    description: ticket.fields ? ticket.fields.description || '' : '',
    summary: ticket.fields ? ticket.fields.summary || '' : '',
    displayName: ticket.fields ? ticket.fields.creator.displayName || '' : '',
    avatar_sm: ticket.fields ? ticket.fields.creator.avatarUrls['16x16'] || '' : '',
    avatar_md: ticket.fields ? ticket.fields.creator.avatarUrls['24x24'] || '' : '',
    avatar_lg: ticket.fields ? ticket.fields.creator.avatarUrls['32x32'] || '' : '',
    avatar_xl: ticket.fields ? ticket.fields.creator.avatarUrls['48x48'] || '' : '',
    type: ticket.type || 'ticket',
    done: false
  };
}
