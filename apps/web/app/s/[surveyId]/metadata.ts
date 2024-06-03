import { Metadata } from "next";
import { notFound } from "next/navigation";

import { WEBAPP_URL } from "@formbricks/lib/constants";
import { getProductByEnvironmentId } from "@formbricks/lib/product/service";
import { COLOR_DEFAULTS } from "@formbricks/lib/styling/constants";
import { getSurvey } from "@formbricks/lib/survey/service";

export const getMetadataForLinkSurvey = async (surveyId: string): Promise<Metadata> => {
  const survey = await getSurvey(surveyId);

  if (!survey || survey.type !== "link" || survey.status === "draft") {
    notFound();
  }

  const product = await getProductByEnvironmentId(survey.environmentId);

  if (!product) {
    throw new Error("Product not found");
  }

  const brandColor = getBrandColorForURL(survey.styling?.brandColor?.light || COLOR_DEFAULTS.brandColor);
  const surveyName = getNameForURL(survey.name);

  const ogImgURL = `/api/v1/og?brandColor=${brandColor}&name=${surveyName}`;

  return {
    title: survey.name,
    metadataBase: new URL(WEBAPP_URL),
    openGraph: {
      title: survey.name,
      description: "Muchas gracias por su tiempo 🙏",
      url: `/s/${survey.id}`,
      siteName: "",
      images: [ogImgURL],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: survey.name,
      description: "Muchas gracias por su tiempo🙏",
      images: [ogImgURL],
    },
  };
};

const getNameForURL = (url: string) => url.replace(/ /g, "%20");

const getBrandColorForURL = (url: string) => url.replace(/#/g, "%23");
