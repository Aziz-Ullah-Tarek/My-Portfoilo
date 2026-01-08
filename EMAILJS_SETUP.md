# EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form functional.

## Steps to Configure EmailJS

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service
1. Go to the "Email Services" page
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

### 3. Create an Email Template
1. Go to the "Email Templates" page
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Copy the Template ID** - you'll need this later

### 4. Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)
3. Copy this key

### 5. Update Contact.jsx
Open `src/components/Contact.jsx` and replace the placeholders on lines 22-24:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### Example Configuration
After setup, it should look like this:
```javascript
const serviceId = 'service_abc1234';
const templateId = 'template_xyz5678';
const publicKey = 'user_9876543210';
```

## Test Your Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email inbox (azizullaht2002@gmail.com) for the message

## Troubleshooting

- **"Failed to send message"**: Check your Service ID, Template ID, and Public Key
- **Email not received**: Check your spam folder and verify your email service is properly connected
- **CORS errors**: Make sure your domain is whitelisted in EmailJS settings

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio websites!

## Your Updated Links
✅ GitHub: https://github.com/Aziz-Ullah-Tarek
✅ LinkedIn: https://www.linkedin.com/in/aziz-ullah-tarek/
✅ Email: azizullaht2002@gmail.com

All social links in the Home and Contact sections have been updated with your valid information!
