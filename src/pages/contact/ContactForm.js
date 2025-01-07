const ContactForm=()=>{
    return(

            <form className="w-full xl:w-1/2 text-lg font-semibold p-3">
                <label className="py-4">Your name</label>
                <input type="text" placeholder="Abc" className="w-full px-4 py-4 text-base rounded-lg border-2 border-gray-400" />

                <label className="py-4">Email address</label>
                <input type="text" placeholder="Abc@def.com" className="w-full px-4 py-4 text-base rounded-lg border-2 border-gray-400" />

                <label className="py-4">Subject</label>
                <input type="text" placeholder="This is optional" className="w-full px-4 py-4 text-base rounded-lg border-2 border-gray-400" />

                <label className="py-4">Message</label>
                <textarea type="text" placeholder="Hi! I'd like to ask about" className="w-full px-4 py-4 text-base rounded-lg border-2 border-gray-400" />

                <input type="submit" value="submit" className="px-24 py-3 mt-10 bg-yellow-600 text-light rounded-lg" />
            </form>

    )
};
export default ContactForm