import { useBlockProps } from '@wordpress/block-editor';
import BookItem from './BookItem';
import DefaultButton from './DefaultButton';
export default function BookSection() {
    return (
		<section { ...useBlockProps.save({className:'lg:!max-w-5xl'}) }>
            <div className="
                flex w-full m-auto relative flex-col gap-2
                before:content-[''] before:block before:absolute before:w-[350px] before:h-[375px] before:bg-[#3498DB] before:rotate-[32deg] before:left-[-270px] before:top-[-67px] before:-z-10 
                lg:justify-center lg:max-w-4xl

                lg:before:left-[-122px] lg:before:top-[0px]

                "
            >
                <ul className="
                        flex w-full gap-5 overflow-x-scroll pb-6
                        lg:overflow-x-hidden lg:flex-wrap lg:justify-start
                    ">
                        <BookItem />
                </ul>
                <DefaultButton></DefaultButton>
            </div>
        </section>
	);
}