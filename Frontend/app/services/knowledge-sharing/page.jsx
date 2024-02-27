import Advantage1 from "@/components/services/knowledge-sharing/advantage1";
import Advantage2 from "@/components/services/knowledge-sharing/advantage2";
import CTA from "@/components/services/knowledge-sharing/cta";
import Hero from "@/components/services/knowledge-sharing/hero";
import Share from "@/components/services/knowledge-sharing/share";
import Unleash from "@/components/services/knowledge-sharing/unleash";
import Unlock from "@/components/services/knowledge-sharing/unlock";

const KnowledgeSharingPage = () => {
  return (
    <div>
      <Hero />
      <Unleash />
      <Unlock />
      <Share />
      <Advantage1 />
      <Advantage2 />
      <CTA />
    </div>
  );
};

export default KnowledgeSharingPage;
