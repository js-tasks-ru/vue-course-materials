import flushPromises from 'flush-promises';
import { shallowMount, mount } from '@vue/test-utils';
import MeetupsPage from '@/components/MeetupsPage';
import MeetupsList from '@/components/MeetupsList';
import { fetchMeetups } from '@/data';
import meetups from '../__fixtures__/meetups.json';
import PageTabs from '@/components/PageTabs';
import MeetupsCalendar from '@/components/MeetupsCalendar';

jest.mock('@/data');

describe('MeetupsPage', () => {
  beforeAll(() => {
    fetchMeetups.mockResolvedValue(meetups);
  });

  it('should be defined', () => {
    expect(MeetupsPage).toBeDefined();
  });

  describe('Unit testing', () => {
    it('should render list with 2 meetups received from fetchMeetups by <meetups-list>', async () => {
      const wrapper = mount(MeetupsPage, {
        stubs: {
          AppIcon: true,
          AppEmpty: true,
          MeetupsCalendar: true,
          PageTabs: true,
          FormCheck: true,
          AppInput: true,
          MeetupsList: {
            props: ['meetups'],
            render(h) {
              return h(
                'div',
                this.meetups.map((meetup) => meetup.title).join(' '),
              );
            },
          },
        },
      });
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.findComponent(MeetupsList).props('meetups')).toMatchObject(
        meetups,
      );
    });

    it('should render list with 2 meetups received from fetchMeetups by <meetups-list> (shallowMount)', async () => {
      const wrapper = shallowMount(MeetupsPage);
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.findComponent(MeetupsList).props('meetups')).toMatchObject(
        meetups,
      );
    });

    it('should render MeetupsCalendar instead of MeetupsList after select calendar by PageTabs', async () => {
      const wrapper = shallowMount(MeetupsPage);
      await flushPromises();
      const pageTabs = wrapper.findComponent(PageTabs);
      pageTabs.vm.$emit('update:selected', 'calendar');
      await wrapper.vm.$nextTick();
      expect(wrapper.findComponent(MeetupsList).exists()).toBeFalsy();
      expect(wrapper.findComponent(MeetupsCalendar).exists()).toBeTruthy();
    });

    it('should match shallowMount snapshot', async () => {
      const wrapper = shallowMount(MeetupsPage);
      await flushPromises();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Integration testing', () => {
    it('should render list with 2 meetups titles received from fetchMeetups in .meetups-list__cover', async () => {
      const wrapper = mount(MeetupsPage);
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(
        wrapper
          .findAll('.meetups-list__cover')
          .wrappers.map((wrapper) => wrapper.text()),
      ).toEqual(meetups.map((meetup) => meetup.title));
    });

    it('should render .meetups-calendar instead of .meetups-list after click on second .page-tabs__tab button', async () => {
      const wrapper = mount(MeetupsPage);
      await flushPromises();
      const pageTabs = wrapper.findAll('.page-tabs__tab').wrappers;
      await pageTabs[1].trigger('click');
      expect(wrapper.find('.meetups-list').exists()).toBeFalsy();
      expect(wrapper.find('.meetups-calendar').exists()).toBeTruthy();
    });

    it('should match mount snapshot', async () => {
      const wrapper = mount(MeetupsPage);
      await flushPromises();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
