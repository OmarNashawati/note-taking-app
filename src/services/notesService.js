const notes = [
  {
    id: 1,
    title: 'Grocery List',
    note: 'Milk, Eggs, Bread, Butter',
    isArchived: false,
    tags: ['shopping', 'errands'],
    last_edit: new Date('2025-07-20T14:32:00'),
    created_at: new Date('2025-07-19T10:15:00'),
  },
  {
    id: 2,
    title: 'Meeting Notes - Project X',
    note: 'Discussed timelines, deliverables, and responsibilities. Deadline: Aug 5.',
    isArchived: false,
    tags: ['work', 'meeting'],
    last_edit: new Date('2025-07-21T09:00:00'),
    created_at: new Date('2025-07-20T16:45:00'),
  },
  {
    id: 3,
    title: 'Book Ideas',
    note: 'Fantasy story about time-traveling librarian. Include magical books and riddles.',
    isArchived: true,
    tags: ['writing', 'ideas'],
    last_edit: new Date('2025-07-18T12:20:00'),
    created_at: new Date('2025-07-15T08:00:00'),
  },
  {
    id: 4,
    title: 'Workout Plan',
    note: 'Mon: Chest, Tue: Back, Wed: Legs, Thu: Rest, Fri: Arms & Shoulders',
    isArchived: false,
    tags: ['fitness', 'routine'],
    last_edit: new Date('2025-07-21T07:00:00'),
    created_at: new Date('2025-07-17T13:30:00'),
  },
  {
    id: 5,
    title: 'Vacation Checklist',
    note: 'Passport, Tickets, Clothes, Charger, Camera',
    isArchived: true,
    tags: ['travel', 'checklist'],
    last_edit: new Date('2025-07-19T18:45:00'),
    created_at: new Date('2025-07-10T11:00:00'),
  },
]

export const getNotes = () => {
  return notes
}
