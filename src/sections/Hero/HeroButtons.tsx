import Button from "../../components/ui/Button";
import OutlineButton from "../../components/ui/OutlineButton";

export default function HeroButtons() {
  return (

    <div className="flex gap-5 mt-10">

      <Button>
        View Projects
      </Button>

      <OutlineButton>
        Download Resume
      </OutlineButton>

    </div>

  );
}