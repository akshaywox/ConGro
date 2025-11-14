import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Form',
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'phoneNumber', 'status', 'createdAt'],
    group: 'Form Submissions',
  },
  access: {
    read: ({ req: { user } }) => !!user, // only admins can view
    create: () => true, // public can submit
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          label: 'Full Name',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'projectType',
          type: 'select',
          label: 'Project Type',
          required: true,
          options: [
            'Residential Interior',
            'Commercial Interior',
            'Renovation',
            'Custom Furniture',
            'Consultation Only',
          ].map((label) => ({ label, value: label })),
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'budgetRange',
          type: 'select',
          label: 'Budget Range',
          options: [
            'Under ₹5 Lakhs',
            '₹5-10 Lakhs',
            '₹10-20 Lakhs',
            '₹20-50 Lakhs',
            'Above ₹50 Lakhs',
          ].map((label) => ({ label, value: label })),
          admin: {
            width: '50%',
          },
        },
        {
          name: 'visitDate',
          type: 'select',
          label: 'Preferred Visit Date',
          options: ['This Week', 'Next Week', 'This Month', 'Flexible'].map((label) => ({
            label,
            value: label,
          })),
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'visitTime',
      type: 'select',
      label: 'Preferred Visit Time',
      options: [
        '9:00 AM - 12:00 PM',
        '12:00 PM - 3:00 PM',
        '3:00 PM - 6:00 PM',
        '6:00 PM - 9:00 PM',
      ].map((label) => ({ label, value: label })),
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      admin: {
        rows: 4,
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Viewed', value: 'viewed' },
      ],
      admin: {
        position: 'sidebar', // keep it visible and easy to update
      },
    },
  ],
}
