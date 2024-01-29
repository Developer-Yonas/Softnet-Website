import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    

<footer class=" bg-violet-50 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  <img src='/images/soft.png' class="h-8 me-3" alt="Softnet Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Adress</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline">Mexico , Shewa Bakery Bldg. 4th Floor </a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Addis Ababa , Ethiopia</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                      <a href="" class="hover:underline">Email: info@softnetsc.com</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Phone:+251(9)77 51 04 51</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
    <li className="mb-4">
        <Link to="/common/Privacy" className="hover:underline">Privacy Policy</Link>
    </li>
    <li>
        <Link to="/common/Terms" className="hover:underline">Terms &amp; Conditions</Link>
    </li>
    </ul>
              </div>
          </div>
      </div>
      <hr class="my-4 border-violet-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-violet-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.softnetsc.com/" class="hover:underline">Softnet™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-0 sm:justify-center sm:mt-0">
              <a href="#" class="text-blue-500 hover:text-violet-900 dark:hover:text-white">
                  <svg class="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                     <FaFacebook/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
             
              <a href="#" class="text-grey-500 hover:text-violet-900 dark:hover:text-white ms-2">
                  <svg class="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
               <FaTwitter/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-red-500 hover:text-violet-900 dark:hover:text-white ">
          <svg className="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Instagram Icon */}
         <FaInstagram/>
          </svg>
          <span className="sr-only">Instagram account</span>
        </a>

        <a href="#" className="text-blue-500 hover:text-violet-900 dark:hover:text-white ">
          <svg className="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Telegram Icon */}
          <FaTelegram/>
          </svg>
          <span className="sr-only">Telegram account</span>
        </a>

        <a href="#" className="text-blue-600 hover:text-violet-900 dark:hover:text-white ">
          <svg className="w-7 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* LinkedIn Icon */}
             <FaLinkedin/>
          </svg>
          <span className="sr-only">LinkedIn account</span>
        </a>
             
          </div>
      </div>
    </div>
</footer>

  )
}
