import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col py-10 gap-10">
      <div className='flex'>
        <div className='w-1/4'>
          <h1 className='text-3xl font-bold'>What is This?</h1>
        </div>
        <div className='w-3/4'>
          <p className='text-lg'>
            Welcome to TinyTrace our URL shortener service! This platform allows you to take long, unwieldy URLs and transform them into short, easy-to-share links.
            Whether you're looking to simplify links for social media, email, or other forms of communication, our service provides a quick and reliable solution.
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/4 flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Tech Stack</h1>
          <p>TinyTrace is built using a modern tech stack to ensure efficiency, scalability, and ease of use:</p>
        </div>
        <hr className='border-2'/>
        <div className='w-3/4'>
          <ul>
            <li className='my-4'>
              <span className='text-xl font-bold'>React </span>
              <br />
              The frontend of our application is built with React, a popular JavaScript library for building user interfaces. React allows us to create a dynamic and responsive user experience.
            </li>
            <li className='my-4'>
              <span className='text-xl font-bold'>Tailwind CSS</span>
              <br />
              We use Tailwind CSS for styling. Tailwind is a utility-first CSS framework that enables us to build custom designs directly in our markup. This approach ensures our application looks great on all devices.
            </li>
            <li className='my-4'>
              <span className='text-xl font-bold'>AWS Lambda</span>
              <br />
              On the backend, we leverage AWS Lambda, a serverless computing service provided by Amazon Web Services. Lambda allows us to run code without provisioning or managing servers, ensuring that our service can scale automatically to handle any amount of traffic.
            </li>
            <li className='my-4'>
              <span className='text-xl font-bold'>Other AWS Services</span>
              <br />
              Alongside Lambda, we use various other AWS services such as API Gateway for managing API endpoints, DynamoDB for our NoSQL database needs, and S3 for secure and scalable storage.
            </li>
          </ul>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/4'>
          <h1 className='text-3xl font-bold'>About Me</h1>
        </div>
        <div className='w-3/4 text-lg'>
          <p>Hi, I'm <b>Calvin Rodrigues</b>, the developer behind this URL shortener service. With a strong background in full-stack development, I specialize in creating and maintaining WordPress plugins, Magento extensions, and PrestaShop modules. My expertise includes developing and integrating RESTful and SOAP APIs using Node.js and TypeScript, designing custom addons, and optimizing performance through thorough debugging and AWS monitoring. I have enhanced key products like the FedEx, UPS, and Bookings Plugins, and created the PostNord plugin to meet specific shipping needs. Proficient in the LAMP stack, CSS, HTML, JavaScript, and Git, I am committed to continuous improvement through Agile practices and expanding my knowledge in React and DevOps, including Docker and CI/CD pipelines. I believe in the power of technology to simplify our lives and am dedicated to creating practical solutions. Connect with me if you want to collaborate or need my expertise on a project.</p>
        </div>
      </div>
      <div className='flex items-center justify-center mt-4'>
          <ul className='flex gap-80 text-gray-700'>
            <li className='animate-bounce delay-150'><a href="https://calvinrodrigues.in" target='_blank'>Calvin Rodrigues</a></li>
            <li><a href="https://github.com/calvinrodrigues500" target='_blank'>Github</a></li>
            <li><a href="www.linkedin.com/in/calvinrodrigues" target='_blank'>LinkedIn</a></li>
          </ul>
      </div>
    </div>
  )
}

export default About