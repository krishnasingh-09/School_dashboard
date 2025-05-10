// import Announcements from "@/components/Announcements";
// import BigCalendarContainer from "@/components/BigCalendarContainer";
// import BigCalendar from "@/components/BigCalender";
// import EventCalendar from "@/components/EventCalendar";
// import prisma from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";

// const StudentPage = async () => {
//   const { userId } = auth();

//   const classItem = await prisma.class.findMany({
//     where: {
//       students: { some: { id: userId! } },
//     },
//   });

//   console.log(classItem);
//   return (
//     <div className="p-4 flex gap-4 flex-col xl:flex-row">
//       {/* LEFT */}
//       <div className="w-full xl:w-2/3">
//         <div className="h-full bg-white p-4 rounded-md">
//           <h1 className="text-xl font-semibold">Schedule (4A)</h1>
//           <BigCalendarContainer type="classId" id={classItem[0].id} />
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className="w-full xl:w-1/3 flex flex-col gap-8">
//         <EventCalendar />
//         <Announcements />
//       </div>
//     </div>
//   );
// };

// export default StudentPage;
import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
  const { userId } = auth();
  if (!userId) {
    return <p>You must be signed in to view your schedule.</p>;
  }

  const classItems = await prisma.class.findMany({
    where: {
      students: { some: { id: userId } },
    },
  });

  if (classItems.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-medium">No classes found</h2>
        <p>It looks like you’re not enrolled in any classes yet.</p>
      </div>
    );
  }

  const firstClassId = classItems[0].id;

  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={firstClassId} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
