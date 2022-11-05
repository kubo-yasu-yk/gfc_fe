import { Checkbox } from "../../components/common/input/Input.tsx";

//利用規約とプライバシポリシーへの同意を求める際に使う
export function Permission() {
  return (
    <div class="w-11/12 h-16 mx-auto mt-6 rounded flex items-center text-2.5 bg-lightRed">
      <Checkbox klass="mx-2" />
      <p>
        <a href="#" class="text-blue">利用規約</a>と
        <a href="#" class="text-blue">プライバシーポリシー</a>に同意する
      </p>
    </div>
  );
}
