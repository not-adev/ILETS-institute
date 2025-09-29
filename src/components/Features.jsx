import React, { useEffect, useLayoutEffect } from 'react';
import FeatureCard from './FeatureCard';

function Features() {




    return (
        <section id="features" className="py-12 bg-gray-50 min-h-screen flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-900">Why Us</h2>
            <div className="max-w-5xl mx-auto px-4">
                <div  className="grid grid-cols-1 md:grid-cols-2 gap-18">
                    <FeatureCard
                     
                        bg="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                        title="Speaking Practice"
                        text="Interactive speaking sessions with instant feedback."
                    />
                    <FeatureCard
                        
                        bg="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                        title="Mock Tests"
                        text="Realistic mock tests to assess your readiness."
                    />
                    <FeatureCard
                     
                        bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                        title="AI Band Score"
                        text="Get your band score instantly using AI."
                    />
                    <FeatureCard
                    
                        bg="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80"
                        title="Practice Materials"
                        text="Access a wide range of practice materials."
                    />
                </div>
            </div>
        </section>
    );
}

export default Features;