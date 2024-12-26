import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          placeholder="John"
          required
        />
        <Input
          label="Last Name"
          type="text"
          placeholder="Doe"
          required
        />
      </div>
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        required
      />
      <Input
        label="Subject"
        type="text"
        placeholder="How can we help?"
        required
      />
      <Textarea
        label="Message"
        placeholder="Tell us more about your project..."
        rows={6}
        required
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="consent"
          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          required
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I agree to the privacy policy and terms of service
        </label>
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;