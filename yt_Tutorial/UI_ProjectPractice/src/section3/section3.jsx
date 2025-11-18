import React from 'react'
import Card2 from './card2'
const Section3 = () => {
    const sec3data = [
        {
            type: 'Free',
            price: '$0/m',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, tempore.",
            features: [
                "Unlimited AI design prompts",
                "Basic layout suggestions",
                "Auto-color palette generator",
                "5 monthly HD exports",
                "Email support"
            ]
        }, {
            type: 'Basic',
            price: '$14.99/m',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, tempore.",
            features: [
                "Advanced AI design recommendations",
                "Smart component suggestions",
                "Unlimited HD exports",
                "AI typography matching",
                "Brand kit upload & auto-styling",
                "Priority email support"
            ]
        }, {
            type: 'Pro',
            price: '$29.99/m',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, tempore.",
            features: [
                "Full AI design automation",
                "Auto-responsive layouts",
                "Team collaboration tools",
                "AI image enhancement & generation",
                "Unlimited cloud storage",
                "24/7 dedicated support"
            ]
        }]
    return (
        <>
            <div className="bg-black h-160 w-full  p-20 ">
                <div className="w-200"><h1 className="text-4xl font-bold text-white">Affordable Plans for <br /><span className="text-violet-600">Every Need</span></h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse ad totam quidem earum dicta ea quibusdam impedit quasi adipisci, unde deleniti dolore recusandae praesentium? Soluta culpa aliquam ut earum, nihil quasi tenetur blanditiis sunt, distinctio expedita odit illum nesciunt!</p>
                </div>

                <div className="flex">
                    {sec3data.map((a, b) => {
                        return (
                            <Card2 type={a.type} price={a.price} description={a.description} features={a.features} key={b}  highlight={b === 1} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Section3
