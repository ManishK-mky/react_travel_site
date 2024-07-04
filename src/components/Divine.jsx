import React from 'react';

function Divine() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative h-[90%] w-[90%]">
        <img
          src="https://images.unsplash.com/photo-1665413791165-b25d42542b80?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Divine"
          className="object-cover h-full w-full rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl font-bold">Explore the Diviness of India...</span>
        </div>
      </div>
    </div>
  );
}

export default Divine;
