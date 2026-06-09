<template>
  <div class="container mx-auto" id="incoming">
    <titolo titoloPagina="Incoming mobility for Design"></titolo>

    <div class="grid grid-cols-12 gap-x-6 mb-12">
      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <p>
          Our Department welcomes international students every year through Erasmus+ and other mobility programmes.
          This page provides practical information for incoming mobility students interested in the Bachelor’s Degree
          in Design in Alghero.
        </p>
        
      </div>

      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Degree programme (Design)</h4>
        <p>
          Incoming students can attend courses within the Bachelor’s Degree in Design. Availability of
          course units may depend on the current academic year offer, timetable compatibility and attendance
          requirements.
        </p>
      </div>

      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Course units & Online Learning Agreement</h4>
        <p>
          Each year the educational offer is approved around mid-June. Shortly after, the updated list of course units
          is shared with incoming students together with guidelines for the Online Learning Agreement.
        </p>
       
        <div class="bg-[#F2F5F9] rounded p-4 mt-3">
          <ul class="list-disc pl-5 text-[20px] leading-[125%] font-[400] tracking-[-.025em] lg:text-[20px] lg:leading-[125%] lg:font-[400] lg:tracking-[-.02em]">
            <strong>Please note:</strong>
            <li>
              Project laboratories are structured as integrated blocks. It is generally not possible to
              select single modules within an interdisciplinary laboratory block.
            </li>
            <li>
              Students should not choose more than one project laboratory per semester.
            </li>
            <li>
              If you mix course units across different years, there may be timetable conflicts.
            </li>
            <li>
              Attendance is mandatory (typically at least 80%) to be admitted to exams.
            </li>
          </ul>
        </div>
      </div>

      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Course catalogue</h4>
        <p>
          Course details can be consulted through the University catalogue/search tools. When available, you can switch
          language (Italian/English) in the catalogue interface. We recommend filtering by academic year and selecting
          the Design degree programme to avoid irrelevant results.
        </p>
      </div>

      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Language of instruction</h4>
        <p>
          Most courses are taught in Italian. A B1 level in Italian (or English) is recommended. Many lecturers can
          support international students with materials in English, but this may vary by course. Exams are usually held
          in Italian, although in some cases an English option may be agreed with the lecturer.
        </p>
      </div>

      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Italian language courses</h4>
        <p>
          The Department may offer a free Italian course for incoming students (beginners) each semester, often held
          online to allow participation before arrival. Details and schedules are provided closer to the start of the
          semester.
        </p>
      </div>

    
      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Academic calendar, timetables and exams</h4>
        <p>
          Lesson periods, exam sessions and timetables are published every year and may change. Please monitor the
          official communications and consult the updated timetables before finalising your Learning Agreement.
        </p>
        <p class="pt-4">
          Exams must be booked within the official booking windows and are usually held only on the scheduled dates.
        </p>
      </div>

   

      <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
        <h4 class="pt-8">Visa procedures & permit of stay</h4>
        <p>
          Students from outside the European Union must follow the visa procedures of the Italian Embassy/Consulate in
          their country and, once in Italy, apply for a permit of stay within the required timeframe. The University
          provides updated instructions during the onboarding process.
        </p>
        <p class="pt-8">
          For official and always up-to-date information, please refer to
          <a
            class="underline"
            href="https://www.architettura.uniss.it/en/international/incoming-mobility/incoming-mobility-study"
            target="_blank"
            rel="noreferrer"
          >Incoming mobility for Study (UNISS)</a>.
         
        </p>
      </div>
    </div>

  
    <saperne></saperne>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" });

useHead({
  title: "AlgheroXDesign - Incoming mobility for Design",
  meta: [
    {
      name: "description",
      content:
        "Practical information for incoming mobility students interested in the Bachelor’s Degree in Design at AlgheroXDesign (University of Sassari).",
    },
    {
      name: "og:description",
      content:
        "Practical information for incoming mobility students interested in the Bachelor’s Degree in Design at AlgheroXDesign (University of Sassari).",
    },
    {
      name: "twitter:description",
      content:
        "Practical information for incoming mobility students interested in the Bachelor’s Degree in Design at AlgheroXDesign (University of Sassari).",
    },
    { name: "title", content: "AlgheroXDesign - Incoming mobility for Design" },
    {
      name: "keywords",
      content:
        "AlgheroXDesign, Design, incoming mobility, Erasmus, international students, University of Sassari",
    },
    { name: "og:title", content: "AlgheroXDesign - Incoming mobility for Design" },
    { name: "og:image", content: "/img/og-graph.png" },
    {
      name: "twitter:title",
      content: "AlgheroXDesign - Incoming mobility for Design",
    },
  ],
  link: [{ rel: "canonical", href: "http://algheroxdesign.it/incoming" }],
});
</script>
<style lang="scss" scoped>
strong{
  font-weight: 500;
}
a{
  border:none;
}
a:hover{
  text-decoration: none;
}
li{
  margin-bottom: .25em;
}
</style>
