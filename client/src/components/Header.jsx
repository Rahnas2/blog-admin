
import Logo from '../assets/blog-project-logo.png'

const Header = () => {
  return (
    <header>
      <div className="bg-white shadow-sm border-bottom-gradient">
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img className='w-52 h-16' src={Logo} />
            </div>
            
            {/* Navigation */}
            <nav className="w-full flex space-x-8 items-center justify-center">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">HOME</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">ABOUT US</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">PROGRAMS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">CURRICULUM</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">MEDIA</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">BLOG</a>
              <a href="#" className="text-red-500 hover:text-red-600 font-medium">CONTACT US</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;