"use client"
import { Dropdown } from "react-bootstrap"

export const HeaderRight = () => {
    return (
        <>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true" className="dropdown-btn flag-btn">
                <img src="/assets/images/flag.svg" alt="flag-icon" width={24} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="list-cstm">
                <div className="flag-list">
                    <img src="/assets/images/flag.svg" alt="flag-icon" />

                    <Dropdown.Item href="#">
                        English
                    </Dropdown.Item>
                </div>
                <div className="flag-list">
                    <img src="/assets/images/flag.svg" alt="flag-icon" />

                    <Dropdown.Item href="#">
                        French
                    </Dropdown.Item>
                </div>
                <div className="flag-list">
                    <img src="/assets/images/flag.svg" alt="flag-icon" />

                    <Dropdown.Item href="#">
                        Spanish
                    </Dropdown.Item>
                </div>
                <div className="flag-list">
                    <img src="/assets/images/flag.svg" alt="flag-icon" />

                    <Dropdown.Item href="#">
                        German
                    </Dropdown.Item>
                </div>

            </Dropdown.Menu>
        </Dropdown>
         <Dropdown>
         <Dropdown.Toggle id="dropdown-autoclose-true" className="dropdown-btn flag-btn">
             <img src="/assets/images/notification-icon.svg" alt="flag-icon" width={24} />
         </Dropdown.Toggle>

         <Dropdown.Menu className="list-cstm">
             <div className="flag-list">
                 <img src="/assets/images/flag.svg" alt="flag-icon" />

                 <Dropdown.Item href="#">
                     English
                 </Dropdown.Item>
             </div>
             <div className="flag-list">
                 <img src="/assets/images/flag.svg" alt="flag-icon" />

                 <Dropdown.Item href="#">
                     French
                 </Dropdown.Item>
             </div>
             <div className="flag-list">
                 <img src="/assets/images/flag.svg" alt="flag-icon" />

                 <Dropdown.Item href="#">
                     Spanish
                 </Dropdown.Item>
             </div>
             <div className="flag-list">
                 <img src="/assets/images/flag.svg" alt="flag-icon" />

                 <Dropdown.Item href="#">
                     German
                 </Dropdown.Item>
             </div>

         </Dropdown.Menu>
     </Dropdown>
      <Dropdown>
      <Dropdown.Toggle id="dropdown-autoclose-true" className="dropdown-btn flag-btn">
          <img src="/assets/images/user-icon.svg" alt="flag-icon" width={24} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="list-cstm">
          <div className="flag-list">
              <img src="/assets/images/flag.svg" alt="flag-icon" />

              <Dropdown.Item href="#">
                  English
              </Dropdown.Item>
          </div>
          <div className="flag-list">
              <img src="/assets/images/flag.svg" alt="flag-icon" />

              <Dropdown.Item href="#">
                  French
              </Dropdown.Item>
          </div>
          <div className="flag-list">
              <img src="/assets/images/flag.svg" alt="flag-icon" />

              <Dropdown.Item href="#">
                  Spanish
              </Dropdown.Item>
          </div>
          <div className="flag-list">
              <img src="/assets/images/flag.svg" alt="flag-icon" />

              <Dropdown.Item href="#">
                  German
              </Dropdown.Item>
          </div>

      </Dropdown.Menu>
  </Dropdown>
   <Dropdown>
   <Dropdown.Toggle id="dropdown-autoclose-true" className="dropdown-btn flag-btn">
       <img src="/assets/images/setting-icon.svg" alt="flag-icon" width={24} />
   </Dropdown.Toggle>

   <Dropdown.Menu className="list-cstm">
       <div className="flag-list">
           <img src="/assets/images/flag.svg" alt="flag-icon" />

           <Dropdown.Item href="#">
               English
           </Dropdown.Item>
       </div>
       <div className="flag-list">
           <img src="/assets/images/flag.svg" alt="flag-icon" />

           <Dropdown.Item href="#">
               French
           </Dropdown.Item>
       </div>
       <div className="flag-list">
           <img src="/assets/images/flag.svg" alt="flag-icon" />

           <Dropdown.Item href="#">
               Spanish
           </Dropdown.Item>
       </div>
       <div className="flag-list">
           <img src="/assets/images/flag.svg" alt="flag-icon" />

           <Dropdown.Item href="#">
               German
           </Dropdown.Item>
       </div>

   </Dropdown.Menu>
</Dropdown>

<div className="user-profile">
    <img src="/assets/images/avatar_25.jpg" alt="user-img"/>
</div>
</>
    )
}
