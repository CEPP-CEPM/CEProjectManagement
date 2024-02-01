import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="navbar bg-[#3E3D42] border-b-4 border-KMITL shadow-lg px-[50px] h-[54px] sticky top-0">
      <div className="navbar-start">
        
        <div className='flex h-[35px] items-center'>
            <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU/SURBVHgBrZhbbBRVGMf/MzvdrU2Kiw3aC6WbkJRCpAKlBYWEkigxkmgxBLwQkRBNxAdrYnjwBXgwGjUREvVBn4AYiCHZqtAQDfQSUGKjUGsvtk1YhJZepTehe5k5fN/s7nRmdqedbftPTs+e+2/O+c4331RCBhJC+CnbT2ldIgUo+U1dxiiFEqmOUpMkSSEspgiimlKDmJ+CPB4LFU0SWABEOqgA5iMaWEvpnlhc8Xy1TmtKDiBHKTviNEgb6oTa/TO029cg/gtB/D9Mg1RIj+RB8i+HVFQBpewFyJQ76BjZ0tE5YWYDUf+9htiV49AodyPPxgPwPnvENZBiA6lNByLCE4g2fQb1z9PIRFkb3pit+QitN0ZAx5MVkgkkQNl1WK8qxPgdhM8dhBj+xzKT5FsCueQZyIGnAW8uJI+PoMeh3WmBdusaHdEGeGu+whxiV7A+ef3NMEHKaiwgZAvh0y9DjN22QCiVB+HZ9BakrBzHVcSDe2RDS+FCjQSz3YARcT/QYO8VPrsPWuiKUZYLyulpv4b06HIssrYTUGPSZt6zt8b++t4KUrwJvr0nycqyjbrp6Wn09vZieHgYNBny8vIQCASQm5uLDMV22iglbOWmpUmNYvqb7bq9sHgnfG+ep22Pm1MkEkFzczN6enqgaVrKzKWlpdiyZQtycnKQgZbyzlTba2MdPxggrKxthw2QyclJBINBPXdSd3c3BgYGUFNTk8ku7Zfpz0v2WrXtnPFbXlYGz5oXjfKlS5dmBUlqYmIC9fX1bI9wqXUME7BUaTGLU/NUzPiKrq4u9PX1wa1GRkbQ3t7utnsqjDbcbenheXy1BSad2Db8fn/aNjZwlwqwzVhm0aYGLD2kwvXG78HBQUtbYWEhysvLsXLlSvT39+u2ZBfbjkv5lZSqB+OOvWOxmH6FV61ahbKyMhQVFVnAuGw/RlVV4VYMwy7Z2B3Ja7uOZEOQ48xVVVVYu3YtsrOz005WXFycAiPLMlxqjFcJIR5CxgcvW23pIYa6IOU/qf+urKxMmYH9DB9RS0uLnttVUFAAlwoxzA0zjLQkn/bLR2cS1stqqBlKAsascDiM1tZWdHZ2YmpqynEFPs5MYWbk8UJevpFeBVfjMH8HoWw+ZDSzj+no6EBbW5sONJvy8/MtMJELHwBTQ/A8tReesp327nV8oCfttfxWTkob6YHa84tR9nq9CIVCc4LwVd+xY4dRZo/OzlS92YxI3buINn5iH9Ik0+1gA24018orNtNxzdyU6MUPISbj19rn82HPnj2oqKhIa8iKoui2tXv3bsurIPKj6V1MN1JZv888rI5jGscQQm0PIvLT+zPj/SvgO3Bej2eS4rc2+xF2/XxreNdKSkp0YLMilz+C+vu3Rjlray2UrZa4vJpgmszBFcNUm3uE6w5B66o3ARXD9+oZ1/GMHq5eOEzB+0XLQ2W/fdlwF4jvyi69zQQTgC3sFOEphE/tghjtsSyibH6Htvl1RyiGUK9/h9gfp+h4786AcCjy2lnzuPRhZwKI9+4LS930BMJnXoEY7EhZlG1LLq6i8OIxIvRSmDoKcfcGxcC/QUTvW/qmAWHVEsgJo0/KUwnBUddRe320+XPEfv0S85Gn9Hlk7fzUYm+8BoEcM1c4fcSlBeLrGW34GGrXBbgR7xwbK+c2pYA4wiSAkt9Q/nRQ/EGn3boKbZQi1vsjidUV/StSfmIN7cZzdCQr7EPHEiAnkKlE/MM/KBZHDWK+H/42qG0LgGrg8W7WkZCBEk9WjXjcHIDzP4tuJNLJhId3pYfsC3tqtkiH2wAAAABJRU5ErkJggg=="
                width={35}
                height={35}
            />
            <a className="btn btn-ghost p-1 text-xl text-white">KMITL</a>
        </div>

        
      </div>
      <div className="navbar-end text-black ">
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content sticky -right-[50px] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen"
          >
            <li>
              <a>Announcement</a>
            </li>
            <li>
              <a>Hall of Frame</a>
            </li>
            <li>
              <a>Subject</a>
            </li>
            <li>
            <details>
              <summary>Faculty</summary>
              <ul className="p-2">
                <li>
                  <a>Curriculum</a>
                </li>
                <li>
                  <a>Faculty Members</a>
                </li>
                <li>
                  <a>Research</a>
                </li>
              </ul>
            </details>
            </li>
            <li>
            <details>
              <summary>About Us</summary>
              <ul className="p-2">
                <li>
                  <a>History</a>
                </li>
                <li>
                  <a>Department Heads</a>
                </li>
                <li>
                  <a>Laboratories</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </details>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 flex-nowrap hidden lg:flex text-white">
          <li>
            <a>Announcement</a>
          </li>
          <li>
            <a>Hall of Frame</a>
          </li>
          <li>
            <details>
              <summary>Student</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Faculty</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>About Us</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
