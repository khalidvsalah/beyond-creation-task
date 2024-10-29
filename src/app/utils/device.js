const device = {
  uA: navigator.userAgent.toLowerCase(),
  get isMobile() {
    return /mobi|android|tablet|ipad|iphone/.test(this.uA) || this.iPadIOS13;
  },
  get isIOS() {
    return (/ipad|iphone/.test(this.uA) || this.iPadIOS13) && !window.MSStream;
  },
  get isAndroid() {
    return (
      this.isMobileAndroid ||
      (!this.isMobileAndroid && /android/i.test(this.uA))
    );
  },
};

export default device;
