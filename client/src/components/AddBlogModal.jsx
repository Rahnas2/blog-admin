import { useState } from 'react';
import { X } from 'lucide-react';
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { createBlogApi } from '../apis/blogServecies';
import toast from 'react-hot-toast';

const AddBlogModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        image: null
    });

    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, image: file }));
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        // Handle form submission logic here
        console.log('Form submitted:', formData);

        try {
            setIsSubmiting(true)

            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("content", formData.content);

            if (formData.image) {
                formDataToSend.append("image", formData.image); 
            }

            const result = await createBlogApi(formDataToSend);
            console.log('result ', result)
            toast.success('blog added successfully')
            handleClose()

        } catch (error) {
            console.error('somethig went wrong ', error)
            toast.error(error?.response?.data?.message || 'something went wrong')
        } finally {
            setIsSubmiting(false)
        }
    };

    const handleClose = () => {
        setFormData({
            title: '',
            description: '',
            content: '',
            image: null
        });
        onClose();
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "blockquote"],
            ["clean"],
        ],
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Add Blog</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-6 space-y-6">
                    {/* Blog Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Blog Image
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-500">
                                {formData.image ? formData.image.name : 'Choose file  |  No file chosen'}
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full px-4 py-2  rounded-md border border-[#ced4da] focus:outline-none focus:shadow-[0_0_0_0.25rem_rgba(254,93,55,0.25)]"
                        />
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Short Description
                        </label>
                        <textarea
                            placeholder="Enter blog short content"
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            rows={2}
                            className="w-full px-4 py-2 rounded-md border border-[#ced4da] focus:outline-none focus:shadow-[0_0_0_0.25rem_rgba(254,93,55,0.25)]"
                        />
                    </div>

                    {/* Blog Content */}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Blog Content
                        </label>
                        <ReactQuill
                            theme="snow"
                            value={formData.content}
                            onChange={(value) => handleInputChange("content", value)}
                            modules={modules}
                            placeholder="Enter full content"
                            className="mt-1 border rounded-md border-[#ced4da] focus:outline-none focus:shadow-[0_0_0_0.25rem_rgba(254,93,55,0.25)]"
                        />
                    </div>

                </div>

                {/* Footer */}
                <div className="flex items-center justify-end space-x-2 p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        disabled={isSubmiting}
                        onClick={handleClose}
                        className="px-4 py-2 text-gray-600 bg-gray-300 hover:bg-gray-400 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                        Close
                    </button>
                    <button
                        disabled={isSubmiting}
                        onClick={handleSubmit}
                        className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                        <>{isSubmiting ? 'loading..' : 'Submit'}</>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default AddBlogModal;