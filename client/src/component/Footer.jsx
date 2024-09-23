import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook,BsInstagram,BsTwitter,BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex md:grid-cols1 ">
          <div className=" mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 rounded-lg text-white">
                Metin2
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
             <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.google.com'
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  Sayfa yönlendirmesi
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
              </div>
              <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.google.com'
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  Sayfa yönlendirmesi
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  Sayfa yönlendirmesi
                </Footer.Link>
              </Footer.LinkGroup>
              </div>
              <div>
              <Footer.Title title='Menu' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/home'
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  Home
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
              </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between"  >
          <Footer.Copyright href='#'  by='TheLordMTA' 
          year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center  ">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsGithub}/>
          </div>

        </div>
      </div>
    </Footer>
  );
}
