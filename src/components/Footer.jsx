function Footer(){
    return(
        <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 mt-8 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex justify-center space-x-4 mb-2">
         <ul className="flex space-x-4 list-none">
           <li className="hover:underline cursor-pointer">HOME</li>
           <li className="hover:underline cursor-pointer">ABOUT</li>
         </ul>
      </div>
             <p>&copy; {new Date().getFullYear()} Kamunge. All rights reserved.</p>
  
        </footer>
    )
}

export default Footer;