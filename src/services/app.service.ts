import { firestore } from "@/config/firebase";

export interface App {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  picture: string;
}

export class AppService {
  readonly nameCollection: string = "apps";

  async list(): Promise<Array<App>> {
    const res = await firestore.collection(this.nameCollection).get();
    const apps: Array<App> = [];

    res.forEach((item) => {
      const data = item.data() as Omit<App, "id">;
      apps.push({ id: item.id, ...data });
    });

    return apps;
  }
}
