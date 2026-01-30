import React from 'react'
import { MdPhone, MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-gray-600">
          <span>Home</span> / <span className="font-medium">Contact</span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="col-span-1">
            {/* Call To Us */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-500 text-white p-3 rounded-full">
                  <MdPhone size={24} />
                </div>
                <h3 className="text-xl font-semibold">Call To Us</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">We are available 24/7, 7 days a week.</p>
              <p className="font-medium">Phone: +998-77-777-77-77</p>
            </div>

            <hr className="my-8" />

            {/* Write To US */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-500 text-white p-3 rounded-full">
                  <MdEmail size={24} />
                </div>
                <h3 className="text-xl font-semibold">Write To Us</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm mb-2">
                Email: <span className="font-medium">ollomurod888@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-span-2">
            <form className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-gray-100 px-4 py-3 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="bg-gray-100 px-4 py-3 rounded"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="bg-gray-100 px-4 py-3 rounded"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full bg-gray-100 px-4 py-3 rounded"
              ></textarea>
              <div className="flex justify-end">
                <button className="bg-red-500 text-white px-8 py-3 rounded font-medium hover:bg-red-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
