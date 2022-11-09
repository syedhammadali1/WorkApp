
import React, { FC, useState } from 'react'
import { forwardRef, useImperativeHandle } from 'react';

interface Props {
  children?: any,
  ref?: any;
  modalBodyStyle?: any;
  fullModalStyle?: any;
  width?: number;
  restProps?: any;

}




export const Modall: FC<Props> = forwardRef((props, ref) => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
    useImperativeHandle(ref, () => ({
      showModal() {
        setShowModal(true);
      },
    }));
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button> */}
      {showModal ? (
        <>
          <div
            className=" transition-all delay-700 duration-700 justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden "
          style={{ backgroundColor :'rgba(0,0,0,.45)' }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl bg-gray_601">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col w-full outline-none focus:outline-none bg-gray_601 shadow-2xl">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  

                </div> */}
                {/*body*/}
                <div className="relative px-6 pb-6 flex-auto">
                  <button 
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none -mr-4"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                    </span>
                  </button>
                  {props.children}
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
})

export default Modall;