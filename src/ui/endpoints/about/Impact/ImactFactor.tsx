import CommonLayout from "../../../components/layout/CommonLayout";
import Title from "../../../other/Title";
import IndexingPartnerArchive from "../../archive/components/IndexingPartnerArchive";

export default function ImactFactor() {
      return (
            <CommonLayout>
                  <section>
                        <Title>Impact Factor</Title>
                        <div className="space-y-4  text-muted-foreground text-base mb-12">
                              <img loading='lazy'
                                    src="/Impact1.webp" alt="Impact Factor" className="w-full h-auto mt-10" />
                              <img loading='lazy'
                                    src="/Impact2.webp" alt="Impact Factor" className="w-full h-auto mt-5" />
                              <img loading='lazy'
                                    src="/Impact3.webp" alt="Impact Factor" className="w-full h-auto mt-5" />
                        </div>
                        <IndexingPartnerArchive />
                  </section>
            </CommonLayout>
      )
}
