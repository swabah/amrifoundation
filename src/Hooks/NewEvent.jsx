import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { uuidv4 } from "@firebase/util";
import { db, storage } from '../Firebase/Firebase';
import { useToast } from "@chakra-ui/react";

function NewEvent() {
    const [selectedEventImg, setSelectedEventImg] = useState(null);
    const [Heading, setHeading] = useState('');
    const [Paragraph, setParagraph] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!selectedEventImg) {
            showErrorToast('Image is required.');
            return;
        }

        setLoading(true);

        try {
            const id = uuidv4();
            const documentId = `${selectedEventImg.name.replace(/\s+/g, '')}_${id}`;

            await uploadImage(documentId);
            const eventImgUrl = await getDownloadURL(ref(storage, `events/${documentId}`));

            await addEventToFirestore(id, eventImgUrl);
            resetForm();

            showSuccessToast('Event added successfully!');
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const uploadImage = async (documentId) => {
        const eventImgRef = ref(storage, `events/${documentId}`);
        await uploadBytes(eventImgRef, selectedEventImg);
    };

    const addEventToFirestore = async (id, eventImgUrl) => {
        await setDoc(doc(db, 'events', id), {
            id,
            EventImgUrl: eventImgUrl,
            Heading,
            Paragraph,
            created: new Date(),
        });
    };

    const resetForm = () => {
        setSelectedEventImg(null);
        setHeading('');
        setParagraph('');
    };

    const showErrorToast = (message) => {
        showToast('error', 'Error', message);
    };

    const showSuccessToast = (message) => {
        showToast('success', 'Success', message);
    };

    const handleError = (error) => {
        console.error('Error adding Event:', error);
        showErrorToast('An error occurred while adding the Event.');
    };

    const showToast = (status, title, message) => {
        toast({
            title,
            description: message,
            status,
            isClosable: true,
            position: 'top',
            duration: 5000,
        });
    };

    return (
        <div className="min-h-screen px-3 py-20  md:px-10 lg:px-10 xl:px-36 w-full flex flex-col items-center text-[#3f2d23] justify-center">
            <div className="w-full max-w-xl p-4 font-sans">
                <form className='space-y-5' onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <h2  className="block mb-1 text-xl ">Event Heading</h2>
                        <input
                            type="text"
                            placeholder='Event Heading'
                            id="Heading"
                            required
                            value={Heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="w-full px-2 py-1 text-lg border rounded outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <h2  className="block mb-1 text-xl">Event Paragraph</h2>
                        <textarea
                            type="text"
                            placeholder='Event Paragraph'
                            id="Paragraph"
                            required
                            value={Paragraph}
                            onChange={(e) => setParagraph(e.target.value)}
                            className="w-full px-2 py-1 overflow-x-hidden text-lg border rounded outline-none min-h-20"
                        />
                    </div>
                    <div className="flex flex-col items-start mb-4">
                        {!selectedEventImg && <h3 className="text-red-700">Image is required.</h3>}
                        <input
                            type="file"
                            id="EventImg"
                            required
                            onChange={(e) => setSelectedEventImg(e.target.files[0])}
                            className="px-2 py-1 mb-4 border rounded"
                        />
                        <button disabled={loading} className=" p-1 px-7  font-sans text-lg text-[#555555] hover:text-white bg-transparent border-2 border-[#555555] transition-colors duration-400 hover:border-[#3a869c] hover:bg-[#3a869c] rounded-3xl font-semibold'">
                            {loading ? 'Loading...' : 'ADD EVENT'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewEvent;