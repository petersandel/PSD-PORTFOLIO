import assert from "node:assert/strict";
import { test } from "node:test";
import { getProjectHeroImage, projects, type Project } from "./projects.ts";

function buildProject(overrides: Partial<Project>): Project {
  return {
    id: "fixture",
    title: "Fixture Project",
    category: "Residential",
    tags: [],
    location: "New York, New York",
    year: "2026",
    image: "/images/projects/fixture/listing.jpg",
    slug: "fixture-project",
    description: "Fixture description.",
    lead: "Fixture lead.",
    editorialKicker: "Fixture",
    designResponse: "Fixture response.",
    details: [],
    images: [
      "/images/projects/fixture/image-1.jpg",
      "/images/projects/fixture/image-2.jpg",
    ],
    imageCaptions: [],
    ...overrides,
  };
}

test("uses the first gallery image as the Greenwich West hero", () => {
  const project: Project = {
    ...buildProject({}),
    image: "/images/projects/fixture/listing.jpg",
    slug: "greenwich-west",
    images: [
      "/images/projects/fixture/image-1.jpg",
      "/images/projects/fixture/image-2.jpg",
    ],
  };

  assert.equal(
    getProjectHeroImage(project),
    "/images/projects/fixture/image-1.jpg",
  );
});

test("keeps other project heroes on their configured listing images", () => {
  const project = buildProject({
    image: "/images/projects/fixture/listing.jpg",
    slug: "head-of-the-harbor",
    images: ["/images/projects/fixture/image-1.jpg"],
  });

  assert.equal(
    getProjectHeroImage(project),
    "/images/projects/fixture/listing.jpg",
  );
});

test("current Greenwich West data resolves to image 1", () => {
  const greenwichWest = projects.find(
    (project) => project.slug === "greenwich-west",
  );

  assert.ok(greenwichWest);
  assert.equal(getProjectHeroImage(greenwichWest), greenwichWest.images[0]);
});

test("Greenwich West gallery omits removed work page images", () => {
  const greenwichWest = projects.find(
    (project) => project.slug === "greenwich-west",
  );

  assert.ok(greenwichWest);
  assert.deepEqual(greenwichWest.images, [
    "/images/projects/Greenwich West/110CarltonSt_Oct21-164.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-169.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-183.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-182.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-193.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-201.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-316.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-276.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-233.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-112.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-150.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-302.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-334.jpg",
    "/images/projects/Greenwich West/110CarltonSt_Oct21-34.jpg",
  ]);
});

test("does not expose Dupont Circle as a work project", () => {
  assert.equal(
    projects.some((project) => project.slug === "dupont-circle"),
    false,
  );
});

test("PS Apartment gallery omits removed work page images", () => {
  const psApartment = projects.find(
    (project) => project.slug === "ps-apartment",
  );

  assert.ok(psApartment);
  assert.deepEqual(psApartment.images, [
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0222_v2.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0063+0067_c.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0008+0035_C.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0196_C.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0101_c.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0227.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0236_C.jpeg",
    "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0265.jpeg",
  ]);
});

test("Design Studio gallery omits removed work page images", () => {
  const designStudio = projects.find(
    (project) => project.slug === "design-studio",
  );

  assert.ok(designStudio);
  assert.equal(
    getProjectHeroImage(designStudio),
    "/images/projects/PSD Studio 22/SandelDesign-624.jpg",
  );
  assert.deepEqual(designStudio.images, [
    "/images/projects/PSD Studio 22/SandelDesign-697.jpg",
    "/images/projects/PSD Studio 22/SandelDesign-646.jpg",
    "/images/projects/PSD Studio 22/SandelDesign-684.jpg",
    "/images/projects/PSD Studio 22/SandelDesign-692.jpg",
    "/images/projects/PSD Studio 22/SandelDesign-676.jpg",
    "/images/projects/PSD Studio 22/SandelDesign_Nov2022-046.jpg",
    "/images/projects/PSD Studio 22/SandelDesign_Nov2022-055.jpg",
    "/images/projects/PSD Studio 22/SandelDesign_Nov2022-104.jpg",
    "/images/projects/PSD Studio 22/SandelDesign_Nov2022-108.jpg",
    "/images/projects/PSD Studio 22/SandelDesign-662.jpg",
  ]);
});

test("St. Regis Singapore gallery omits duplicate listing images", () => {
  const stRegisSingapore = projects.find(
    (project) => project.slug === "st-regis-singapore",
  );

  assert.ok(stRegisSingapore);
  assert.equal(stRegisSingapore.images.includes(stRegisSingapore.image), false);
  assert.deepEqual(stRegisSingapore.images, [
    "/images/projects/St Regis Singapore/2100 Singapore Split Shot.jpeg",
    "/images/projects/St Regis Singapore/2100 Dining Singapore.jpeg",
    "/images/projects/St Regis Singapore/2100 Singapore Entry.jpeg",
    "/images/projects/St Regis Singapore/2100 Singapore Coffee Table Close Up.jpeg",
    "/images/projects/St Regis Singapore/IMG 0021_rr.jpg",
    "/images/projects/St Regis Singapore/IMG 0205_rr.jpg",
    "/images/projects/St Regis Singapore/IMG 0219_rr.jpg",
    "/images/projects/St Regis Singapore/IMG 0235_rr.jpg",
    "/images/projects/St Regis Singapore/IMG 0270_rr.jpg",
    "/images/projects/St Regis Singapore/IMG 0283_rr2.jpg",
    "/images/projects/St Regis Singapore/IMG 0295_rr2.jpg",
    "/images/projects/St Regis Singapore/IMG 0303_rr2.jpg",
  ]);
});
