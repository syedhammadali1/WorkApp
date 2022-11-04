import React from 'react'
import { Layout, Text } from '../../components'

const PrivacyPolicy = () => {
    const contentPhaseOne = [
        'Nib Technologies Sdn. Bhd. has built the WorqApp app as a Freemium app. This service is provided by us at no cost and is intended for use as is.',
        'This page is used to inform website visitors and users of WorqApp regarding our policies with the collection, use, and disclosure of Personal Information of anyone decides to use our service.',
        'If you choose to use our service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect are used for providing and improving the service through WorqApp. We will not use or share your information with anyone except as described in this Privacy Policy.',
        'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at WorqApp unless otherwise defined in this Privacy Policy.'
    ]

    const contentPhaseTwo = [
        'For a better experience, while using WorqApp app, we may require you to provide us the access to your device’s contacts, camera, and storage as well as certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. We do not store any password that you provide.',
        'The app requires the user to provide us his mobile number and email address (on with whichever the user signed up) to create a WorqApp account.',
        'After the sign-up is completed, the app would ask for the user’s contacts list access. When given access, the app uploads the contacts list on the server for notifying the user of his contacts using the app and for a better experience to chat and communicate with the contacts. The contact information is encrypted, and we do not use this information for any other purpose, nor do we share it with any other platform.',
        'The app requires the user to allow the permissions of accessing his camera and storage. When given access, the user can send pictures, videos, and files from his device’s storage. Once the attachments are delivered, they are deleted from our servers and we do not store any information from the user’s storage.',
        'The email that the user provides us is used as the username to sign-in and to send emails for his sign-up via email and reset his forgotten password. We do not send any spam or unrelated emails to anyone.',
        'The app does use third party services that may collect information used to identify you. Link to privacy policy of third-party service providers used by the app.',
        'Google Play Services',
        'Firebase Analytics',
        'Crashlytics'
    ]

    const Content = {
        PhaseOne: {
            heading: "Privacy Policy",
            points: [
                'Nib Technologies Sdn. Bhd. has built the WorqApp app as a Freemium app. This service is provided by us at no cost and is intended for use as is.',
                'This page is used to inform website visitors and users of WorqApp regarding our policies with the collection, use, and disclosure of Personal Information of anyone decides to use our service.',
                'If you choose to use our service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect are used for providing and improving the service through WorqApp. We will not use or share your information with anyone except as described in this Privacy Policy.',
                'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at WorqApp unless otherwise defined in this Privacy Policy.'
            ]
        },
        PhaseTwo: {
            heading: "Information Collection and Use",
            points: [
                'For a better experience, while using WorqApp app, we may require you to provide us the access to your device’s contacts, camera, and storage as well as certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. We do not store any password that you provide.',
                'The app requires the user to provide us his mobile number and email address (on with whichever the user signed up) to create a WorqApp account.',
                'After the sign-up is completed, the app would ask for the user’s contacts list access. When given access, the app uploads the contacts list on the server for notifying the user of his contacts using the app and for a better experience to chat and communicate with the contacts. The contact information is encrypted, and we do not use this information for any other purpose, nor do we share it with any other platform.',
                'The app requires the user to allow the permissions of accessing his camera and storage. When given access, the user can send pictures, videos, and files from his device’s storage. Once the attachments are delivered, they are deleted from our servers and we do not store any information from the user’s storage.',
                'The email that the user provides us is used as the username to sign-in and to send emails for his sign-up via email and reset his forgotten password. We do not send any spam or unrelated emails to anyone.',
                'The app does use third party services that may collect information used to identify you. Link to privacy policy of third-party service providers used by the app.',
                'Google Play Services',
                'Firebase Analytics',
                'Crashlytics'
            ]
        }
    }
    return (
        <>
            <Layout>

                <div className='w-full'>
                    <div className='container'>
                        <Text as="h2"
                            variant="h2">{Content.PhaseOne.heading}</Text>

                        {
                            Content.PhaseOne.points.map((singlePolicy) => {
                                return (
                                    <Text variant="h5" as={'h5'} className='my-5'>
                                        {singlePolicy}
                                    </Text>
                                )
                            })
                        }

                        <Text as="h2"
                            variant="h2"> {Content.PhaseTwo.heading}</Text>
                        {
                            Content.PhaseTwo.points.map((singlePolicy) => {
                                return (
                                    <Text variant="h5" as={'h5'} className='my-5 '>
                                        {singlePolicy}
                                    </Text>
                                )
                            })
                        }


                    </div>
                </div>


            </Layout>
        </>
    )
}

export default PrivacyPolicy

