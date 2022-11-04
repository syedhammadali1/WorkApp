import React, { cloneElement, FC, useState } from 'react'
import { Button, Column } from '../'

interface Props {
    children?: any
    className?: string
    initialIndex?: number
}


const ExpandCollapse: FC<Props> = ({ children, className, initialIndex = 1 }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [icon, setIcon] = useState<string>("expand");

    const updateIndex = () => {
        if (activeIndex < React.Children.count(children)) {
            if (isExpanded) {
                setActiveIndex(activeIndex + 1);
                if ((activeIndex + 1) === React.Children.count(children)) {
                    setTimeout(() => {
                        setIcon("collapse")
                    }, 800);
                }

            } else {
                if (activeIndex === 1 && !isExpanded) {
                    setIsExpanded(!isExpanded)
                    setActiveIndex(activeIndex + 1);
                } else {
                    setActiveIndex(activeIndex - 1);
                    if ((activeIndex - 1) === 1) {
                        setTimeout(() => {
                            setIcon("expand")
                        }, 800);
                    }
                }
            }
        } else if (activeIndex === React.Children.count(children)) {
            setIsExpanded(!isExpanded)
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <Column className={'relative ' + className}>
            {React.Children.map(children, (child, index) => {
                return cloneElement(child, {
                    index,
                    activeIndex,
                })
            })}
            <Button
                className={"absolute bottom-0 right-0 h-10 w-10 text-white rounded-radius50"}
                size="smIcn"
                variant="icbFillGray902"
                onclick={updateIndex}
            >
                {icon === "expand"
                    ? <svg className="w-full h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    : <svg className="w-full h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                }
            </Button>
        </Column>
    )
}


interface PropsItem {
    children?: any
    className?: string
    activeIndex?: number
    index?: number
}

export const ExpandCollapseItem: FC<PropsItem> = ({ children, className, index = 0, activeIndex = 0 }: PropsItem) => {
    return (
        <Column className={className + ' ' + (index >= activeIndex ? ' h-0 ' : ' h-72') + ' transition-all delay-300 duration-500 overflow-hidden'} key={index}>
            {children}
        </Column>
    )
}


export default ExpandCollapse