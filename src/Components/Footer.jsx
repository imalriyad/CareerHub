import { BsFacebook,BsTwitter,BsInstagram } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className='bg-[#1A1919] mt-24'>
      <footer className="max-w-screen-2xl mx-auto grid md:grid-cols-5 grid-cols-2 p-8 text-white space-y-6 md:space-y-0 ">
        <aside>
          <h1 className="md:text-3xl text-xl font-bold mb-4">CareerHub</h1>
          <p className='text-gray-300 text-sm'>
          There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
          </p>
          <div className='flex text-2xl gap-6 mt-4'>
         < BsFacebook className='cursor-pointer'/>
         < BsTwitter className='cursor-pointer'/>
         < BsInstagram className='cursor-pointer'/>
          </div>
        </aside>
        <nav className='md:ml-24'>
          <header className="text-xl mb-3 font-medium">Company</header>
         <div className='flex-col text-gray-300 flex text-sm space-y-1'>
         <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
         </div>
        </nav>
        <nav>
          <header className="text-xl mb-3 font-medium">Product</header>
         <div className='flex-col text-gray-300 flex text-sm space-y-1'>
         <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
         </div>
        </nav>
        <nav>
          <header className="text-xl mb-3 font-medium">Support</header>
          <div className='flex-col text-gray-300 flex text-sm space-y-1'>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>

        <nav>
          <header className="text-xl mb-3 font-medium">Contact</header>
          <div className='flex-col text-gray-300 flex text-sm space-y-1'>
          <a className="link link-hover">524 Broadway , NYC </a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
          </div>
        </nav>
      </footer>
      
    </div>
  );
};

export default Footer;
