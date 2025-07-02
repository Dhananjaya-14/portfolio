# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive real emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (dhananjaya2859dk@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Email Body:**
```
Hello Dhananjaya,

You have received a new message from your portfolio contact form:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code

Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your actual public key
```

For example:
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'user_def456';
```

## Step 6: Test Your Setup

1. Start your development server: `npm start`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email (dhananjaya2859dk@gmail.com) for the message

## Troubleshooting

### Common Issues:

1. **"Service not found" error**: Double-check your Service ID
2. **"Template not found" error**: Double-check your Template ID
3. **"Invalid public key" error**: Double-check your Public Key
4. **Emails not sending**: Make sure your Gmail account is properly connected

### Security Notes:

- The public key is safe to use in client-side code
- Never share your private keys
- EmailJS has rate limits on free accounts (200 emails/month)

## Alternative: Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update your Contact.tsx:
```typescript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
```

## Free Plan Limits

- 200 emails per month
- 2 email templates
- 1 email service

If you need more, consider upgrading to a paid plan.

## Support

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Check your browser console for error messages
3. Verify all credentials are correct 