abstract class TakePhotoSocial {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    return 8;
  }
}

class InstagramPlatform extends TakePhotoSocial {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
      console.log("Sepia");
  }
}

const es = new InstagramPlatform("test", "test", 2);

es.getReelTime();
