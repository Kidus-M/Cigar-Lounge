const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1837521498636!2d38.769730169592755!3d8.996513499441487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850483b8f6c5%3A0xa5b48fae0775c152!2sWolf%20den%20Cigar%20Lounge!5e0!3m2!1sen!2set!4v1784886873709!5m2!1sen!2set";

export default function WolfDenMap() {
  return (
    <iframe
      src={mapEmbedUrl}
      title="Wolf Den Cigar Lounge location"
      className="h-[420px] w-full border-0 md:h-[520px]"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
