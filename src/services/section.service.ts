import { firestore } from "@/config/firebase";

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  route: string;
  image: string;
  color: string;
}

export class SectionService {
  readonly nameCollection: string = "sections";

  async list(): Promise<Array<Section>> {
    const res = await firestore.collection(this.nameCollection).get();
    const sections: Array<Section> = [];

    res.forEach((section) => {
      const data = section.data() as Omit<Section, "id">;
      sections.push({ ...data, id: section.id });
    });

    return sections;
  }
}
